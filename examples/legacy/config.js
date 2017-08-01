/**
 * legacy 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
    name: "Legacy"
};

var exampleConfig = {
    "iServer": {
        name: "iServer",
        content: {
            "processingJobs": {
                name: "大数据空间分析",
                content: [{
                    name: "密度分析作业",
                    thumbnail: "kernelDensityJobService.png",
                    fileName: "kernelDensityJobService"
                }, {
                    name: "格网聚合分析作业",
                    thumbnail: "SummaryMeshJobService.png",
                    fileName: "SummaryMeshJobService"
                }, {
                    name: "生成地图缓存作业",
                    thumbnail: "buildCacheService.png",
                    fileName: "buildCacheService"
                },{
                    name: "单对象查询分析作业",
                    thumbnail: "lg_singleObjectQueryJob.png",
                    fileName: "singleObjectQueryJobService"

                }]
            },
            "addressMatch": {
                name: "地址匹配",
                content: [{
                    name: "地址匹配",
                    thumbnail: "addressMatchService.png",
                    fileName: "addressMatchService"
                }]
            }
        }
    },
    "viz": {
        name: "可视化",
        content: {
            "MapV": {
                name: "MapV",
                content: [{
                    name: "蜂巢图",
                    thumbnail: "lg_mapVLayer_honeycomb.png",
                    fileName: "mapVLayerHoneycomb"
                }, {
                    name: "简单线",
                    thumbnail: "lg_mapVLayer_polylineSimple.png",
                    fileName: "mapVLayerPolylineSimple"
                }]
            }

        }
    }
};
/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
	"iServer": "fa-server",
    "viz": "fa-map",
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
	"iServer": "fa-server",
    "viz": "fa-map",
};