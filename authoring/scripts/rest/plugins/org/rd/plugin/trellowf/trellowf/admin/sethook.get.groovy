import plugins.org.rd.plugin.trellowf.Trello

def trello = new Trello(pluginConfig)

return trello.createWebHookWithTrello(params.server, params.siteId, params.boardId) 
