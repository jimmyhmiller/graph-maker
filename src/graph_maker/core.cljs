(ns graph-maker.core
  (:require [reagent.core :as r]
            [viz.core :as viz]
            [dorothy.core :as dot]
            [instaparse.core :as insta]))


(def default-text
"thing -> other-thing -> stuff 
dir: both

more-stuff -> thing

thing
shape: square")

(def initial-hash
  (subs (js/decodeURIComponent (.-hash js/location)) 1))

(defonce graph-text (r/atom 
                   (if-not (= initial-hash "") 
                     initial-hash
                     default-text)))

(add-watch graph-text :url-encode
           (fn [_ _ _ new-state]
             (set! (.-hash js/location)
                    (js/encodeURIComponent new-state))))


(def grammar
"<graph>        = element*
<element>       = subgraph | connection | node
subgraph        = connection edge-attributes
connection      = from (<arrow> to)+ 
node            = identifier node-attributes?
edge-attributes = attributes
node-attributes = attributes
attributes      = attribute+
attribute       = identifier <\":\"> identifier
<from>          = identifier
<to>            = identifier
arrow           = \"->\"
identifier    = #\"[A-Za-z0-9\\-_]+\"")


(def parse (insta/parser grammar :auto-whitespace :standard))
(parse default-text)


(defn transform-graph [graph]
  (->> graph
   (insta/transform 
    {:connection (fn [& connections] (into [] connections))
     :node (fn [& node](into [] node))
     :edge-attributes dot/edge-attrs
     :node-attributes identity
     :subgraph (fn [connections attributes] (dot/subgraph [attributes connections]))
     :attributes (fn [& attributes] (into {} attributes))
     :attribute (fn [& attribute] (into [] (map keyword attribute)))
     :identifier keyword})
   (into [])))

(defn build-graph [input]
  (->> input
       parse
       transform-graph
       dot/digraph
       dot/dot))

(build-graph default-text)


(defn get-value [e]
  (.. e -target -value))


(defn home-page []
  [:div 
   [:h2 "Create a Graph"]
   [:textarea {:value @graph-text 
               :onChange #(reset! graph-text (get-value %))
               :style {:width "30%"
                       :height "200px"
                       :margin-right "30px"
                       :float :left}}]
   [:div {:dangerouslySetInnerHTML 
          {:__html (viz/image 
                    (build-graph @graph-text))}
          :style {:width "40%"
                  :height "200px"
                  :float :left}}]])



(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
