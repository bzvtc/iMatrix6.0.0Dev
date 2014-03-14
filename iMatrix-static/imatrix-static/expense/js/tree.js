var tree={treeId:"",__treeType:"jstree",mType:"",paramName:"",initiallySelect:"",__multiple:false,initiallySelectFirst:false,initiallySelectFirstChild:false,callback:{},initTree:function(c){tree.treeId=c.treeId;tree.paramName=c.paramName;var b=c.type;if(typeof(b)=="undefined"||b==""){b="jstree"}tree.__treeType=b;var a=c.initiallySelect;if(typeof(a)=="undefined"){c.initiallySelect=""}tree.initiallySelect=c.initiallySelect;if(typeof(c.callback)=="undefined"){c.callback={}}tree.callback=c.callback;if(typeof(c.multiple)=="undefined"){c.multiple=false}tree.__multiple=c.multiple;tree.mType=c.treeType;tree.initiallySelectFirst=c.initiallySelectFirst;if(typeof(c.initiallySelectFirst)=="undefined"){tree.initiallySelectFirst=false}tree.initiallySelectFirstChild=c.initiallySelectFirstChild;if(typeof(c.initiallySelectFirstChild)=="undefined"){tree.initiallySelectFirstChild=false}if(tree.initiallySelectFirstChild){tree.initiallySelectFirst=true}if(b=="jstree"){___createJSTree(c)}else{if(b=="ztree"){___createZTree(c)}}},getSelectNodeId:___getSelectNodeId,getSelectNodeIds:___getSelectNodeIds,getSelectNode:___getSelectNode,getSelectNodes:___getSelectNodes,getTreeObject:___getZTreeObj,searchNodes:___ztreeSearchNode};function ___createJSTree(c){if(typeof(c.theme)=="undefined"){c.theme="default"}var b=isStaticTree(c);var a={json_data:{ajax:{url:c.url,data:function(d){return ___getPostDataParam(d)}}},themes:{theme:c.theme,dots:true,icons:true},ui:{initially_select:[c.initiallySelect]},types:{types:___getJstreePluginTypes(c)},plugins:___getJstreePlugins(c)};if(b){a.json_data={data:c.data}}$("#"+c.treeId).bind("loaded.jstree",function(f){var d=c.callback.loadTree;if(typeof(d)=="function"){d()}}).bind("select_node.jstree",function(f){var d=c.callback.onClick;if(typeof(d)=="function"){d()}}).jstree(a)}function isStaticTree(a){var b=false;if(a.url==""||typeof(a.url)=="undefined"){b=true}return b}function ___getJstreePluginTypes(obj){var types="[{";var typeInfos=obj.types;if(typeof(typeInfos)=="undefined"||typeInfos==""){return{}}for(var t in typeInfos){types+='"'+t+'":{"icon":{"image":"'+typeInfos[t]+'"}},'}if(types.indexOf(",")>=0){types=types.substring(0,types.lastIndexOf(","))}types=types+"}]";return eval(types)[0]}function ___getJstreePlugins(b){var a=b.plugins;return a.split(",")}function ___getSelectNodeId(){var b="";if(tree.__treeType=="jstree"){var f=$("#"+tree.treeId).find(".jstree-clicked");var d;if(f.length>0){d=f[0];b=$(d).parent().attr("id")}}else{if(tree.__treeType=="ztree"){var c=$.fn.zTree.getZTreeObj(tree.treeId);var a=c.getSelectedNodes();var e=a.length>0?a[0]:"";if(e!=""){b=e.id}}}return b}function ___getSelectNodeIds(){var d=[];var b=0;if(tree.__treeType=="jstree"){var f=$("#"+tree.treeId).find(".jstree-clicked");var e;for(var c=0;c<f.length;c++){e=f[c];d[b++]=$(e).parent().attr("id")}}else{if(tree.__treeType=="ztree"){var a=___getSelectNodes();for(var c=0;c<a.length;c++){d[b++]=a[c].id}}}return d}function ___getSelectNode(){if(tree.__treeType=="ztree"){var b=$.fn.zTree.getZTreeObj(tree.treeId);var a=b.getSelectedNodes();var c=a.length>0?a[0]:"";return c}else{return""}}function ___getSelectNodes(){if(tree.__treeType=="ztree"){var f=$.fn.zTree.getZTreeObj(tree.treeId);var b=f.getCheckedNodes();var e=tree.mType;var a=[];var c=0;for(var d=0;d<b.length;d++){if(e!=3&&e!=4&&e!=5){if(!b[d].getCheckStatus().half){a[c++]=b[d]}}else{a[c++]=b[d]}}return a}else{return""}}function ___getPostDataParam(cunrrentNode){var paramName=tree.paramName;if(typeof(paramName)=="undefined"||paramName==""){return{}}var currentId=cunrrentNode!=-1?cunrrentNode.attr("id"):-1;return eval("["+paramName+":"+currentId+"]")[0]}function ___createZTree(b){var c={data:{simpleData:{enable:true},treeType:b.treeType},view:{fontCss:_______getFontCss},callback:{beforeExpand:typeof(b.callback.beforeExpand)=="function"?b.callback.beforeExpand:function(){},beforeAsync:typeof(b.callback.beforeAsync)=="function"?b.callback.beforeAsync:function(){},onAsyncSuccess:__onAsyncSuccess,onAsyncError:typeof(b.callback.onAsyncError)=="function"?b.callback.onAsyncError:function(){},onExpand:typeof(b.callback.onExpand)=="function"?b.callback.onExpand:function(){},onClick:__treeOnClick,onCheck:__treeOnCheck}};if(b.multiple){if(typeof(b.chkboxType)=="undefined"){b.chkboxType={Y:"ps",N:"ps"}}c.check={chkboxType:b.chkboxType,chkStyle:"checkbox",enable:true}}var a=isStaticTree(b);if(a){$.fn.zTree.init($("#"+tree.treeId),c,b.data);__intSelectNode()}else{c.async={enable:true,url:b.url};$.fn.zTree.init($("#"+tree.treeId),c)}}function __onAsyncSuccess(b,d,c){__intSelectNode();var a=tree.callback.onAsyncSuccess;if(typeof(a)=="function"){a(b,d,c)}}function __treeOnClick(b,d,c){___onClickExpandNode(b,d,c);var a=tree.callback.onClick;if(typeof(a)=="function"){a(b,d,c)}}function __treeOnCheck(b,d,c){if(tree.__multiple){___onCheckExpandNode(b,d,c)}var a=tree.callback.onCheck;if(typeof(onClickCallback)=="function"){a(b,d,c)}}function __intSelectNode(){var c=_______getInitSelectNode();if(c!=null){var b=$.fn.zTree.getZTreeObj(tree.treeId);b.selectNode(c);var a=tree.callback.onClick;if(typeof(a)=="function"){a()}}}function ___onClickExpandNode(b,d,c){if(c){var a=$.fn.zTree.getZTreeObj(d);if(tree.__multiple){a.checkNode(c,null,true);if(c.checked){a.expandNode(c,true,false,true,true)}}else{a.expandNode(c,true,false,true,true)}}}function ___onCheckExpandNode(b,d,c){var a=$.fn.zTree.getZTreeObj(d);if(c){if(c.checked){a.expandNode(c,true,false,true,true)}}}function ___getZTreeObj(){return $.fn.zTree.getZTreeObj(tree.treeId)}var nodeList=[];function ___ztreeSearchNode(b){___zteeUpdateNodes(false);var a=tree.getTreeObject();nodeList=a.getNodesByParamFuzzy("name",b,null);___zteeUpdateNodes(true)}function ___zteeUpdateNodes(c){if(nodeList){var d=$.fn.zTree.getZTreeObj(tree.treeId);for(var e=0,b=nodeList.length;e<b;e++){var a=nodeList[e].getParentNode();if(a!=null){d.expandNode(a,true,true,true,false)}nodeList[e].highlight=c;d.updateNode(nodeList[e])}}}function _______getFontCss(b,a){return(!!a.highlight)?{color:"#FF0000"}:{color:"#333"}}function _______getInitSelectNode(){var e=null;if(tree.initiallySelect!=""){var b=tree.initiallySelect;if(typeof(tree.initiallySelect)=="function"){var f=tree.initiallySelect;b=f()}var d=$.fn.zTree.getZTreeObj(tree.treeId);if(d!=null&&typeof(d)!="undefined"){e=d.getNodesByFilter(function(g){if(g.id==b){return true}return false},true)}}if(e==null){if(tree.initiallySelectFirst){var d=$.fn.zTree.getZTreeObj(tree.treeId);if(d!=null&&typeof(d)!="undefined"){var a=d.getNodes();for(var c=0;c<a.length;c++){if(tree.initiallySelectFirstChild){return ____getInitSelectChildNode(a)}else{return a[c]}}}}}return e}function ____getInitSelectChildNode(a){for(var c=0;c<a.length;c++){var b=a[c].children;if(b==null||b.length<=0){return a[c]}else{return ____getInitSelectChildNode(b)}}};