(ns ^:figwheel-no-load graph-maker.dev
  (:require
    [graph-maker.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
