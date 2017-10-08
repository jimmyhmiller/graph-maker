(ns graph-maker.prod
  (:require
    [graph-maker.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
