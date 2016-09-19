Event = require 'event'
extend = require 'extend'

module.exports =
Component = ->
    component = extend {}, Event()

    component.mixin = (otherObj) ->
        extend component, otherObj

    component.getEl = ->
        throw "The method #getEl has not been implemented"

    component.show = ->
        component.getEl().style.display = 'block'

    component.hide = ->
        component.getEl().style.display = 'none'

    component
