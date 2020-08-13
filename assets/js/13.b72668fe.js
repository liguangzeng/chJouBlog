(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{438:function(t,a,s){t.exports=s.p+"assets/img/20200806threejs-1.50af12d4.png"},439:function(t,a,s){t.exports=s.p+"assets/img/20200806threejs-2.752c1810.png"},466:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("记得自己做前端是看到了很酷的特效，感觉热血沸腾，一下子就冲到前端的队伍中去，实际工作中确实各种后台管理、H5(涉及一些动画)，然后就是一些大屏，技术倒是用的也不少，从最开始的JQ(好几年没用过了)到vue、react再到支付宝微信小程序(包括uni-app)基本都是在2D的世界里徘徊，对3D世界充满向往，奈何自己没文化，一声叹气撸代码！")]),t._v(" "),e("p",[t._v("最近还是决定来学一下3D，想了想从WebGL和计算机图形学入手周期较长，先去了解一下threejs，在回过头来学习。做个学习小笔记")]),t._v(" "),e("h2",{attrs:{id:"三要素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三要素"}},[t._v("#")]),t._v(" 三要素")]),t._v(" "),e("ul",[e("li",[t._v("渲染器(renderer)")])]),t._v(" "),e("p",[t._v("渲染器应该类似于视网膜（猜的），决定了我们渲染到页面的方式和效果，threejs提供了很多渲染器，CanvasRenderer、WebGLRenderer等，WebGLRenderer渲染性能及渲染效果好于CanvasRenderer，兼容性上要劣于CanvasRenderer。")]),t._v(" "),e("ul",[e("li",[t._v("场景(scene)")])]),t._v(" "),e("p",[t._v("场景就是大千世界，承载着所要展示的物体、光源等，相当于一个容器")]),t._v(" "),e("ul",[e("li",[t._v("相机(camera)")])]),t._v(" "),e("p",[t._v("相机相当于人的眼睛，从不同角度看到的物体也是不相同的。常用的相机有正交（orthographic）相机和透视（perspective）相机")]),t._v(" "),e("p",[t._v("三要素是缺一不可的，我们之后对3D的探索也都是围绕着这三要素展开的，开始探索的3D世界吧！！！")]),t._v(" "),e("h2",{attrs:{id:"相机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相机"}},[t._v("#")]),t._v(" 相机")]),t._v(" "),e("p",[t._v("相机这部分还是需要单独拎出来研究一下的，3D的很多效果都是操作相机实现的。")]),t._v(" "),e("h3",{attrs:{id:"正交相机-orthographiccamera"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正交相机-orthographiccamera"}},[t._v("#")]),t._v(" 正交相机(OrthographicCamera)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://chasejourney.top/three_demo/index-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/xwei111/three_demo/blob/master/index-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:s(438),alt:"An image"}})]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("OrthographicCamera")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("正交相机是由左、右、上、下、远、近六个面组成，正交相机不会随着距离的改变改变物体的大小，使用正交相机的时候为了保证渲染结果的比例正常需要保证(right-left) / (top - bottom)等于canvas宽 / 高")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("left")]),t._v(" "),e("td",[t._v("左面位置")])]),t._v(" "),e("tr",[e("td",[t._v("right")]),t._v(" "),e("td",[t._v("右面位置")])]),t._v(" "),e("tr",[e("td",[t._v("top")]),t._v(" "),e("td",[t._v("左面位置")])]),t._v(" "),e("tr",[e("td",[t._v("bottom")]),t._v(" "),e("td",[t._v("左面位置")])]),t._v(" "),e("tr",[e("td",[t._v("near")]),t._v(" "),e("td",[t._v("左面位置")])]),t._v(" "),e("tr",[e("td",[t._v("far")]),t._v(" "),e("td",[t._v("左面位置")])])])]),t._v(" "),e("h3",{attrs:{id:"透视相机-perspectivecamera"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#透视相机-perspectivecamera"}},[t._v("#")]),t._v(" 透视相机(PerspectiveCamera)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://chasejourney.top/three_demo/index-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/xwei111/three_demo/blob/master/index-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:s(439),alt:"An image"}})]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("PerspectiveCamera")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fov"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aspect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" near"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" far"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("透视相机更像人的眼睛，离相机越远物体越小，相机可以通过"),e("code",[t._v("camera.position.set")]),t._v("和 "),e("code",[t._v("camera5.lookAt")]),t._v("来设置相机的位置和观察的位置")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("fov")]),t._v(" "),e("td",[t._v("视野角度")])]),t._v(" "),e("tr",[e("td",[t._v("aspect")]),t._v(" "),e("td",[t._v("渲染区域的纵横比")])]),t._v(" "),e("tr",[e("td",[t._v("near")]),t._v(" "),e("td",[t._v("最近距镜头的位置")])]),t._v(" "),e("tr",[e("td",[t._v("far")]),t._v(" "),e("td",[t._v("最远距镜头的位置")])])])]),t._v(" "),e("h2",{attrs:{id:"几何体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#几何体"}},[t._v("#")]),t._v(" 几何体")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://chasejourney.top/three_demo/index-3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/xwei111/three_demo/blob/master/index-3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"长方形"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#长方形"}},[t._v("#")]),t._v(" 长方形")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PlaneGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" widthSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" heightSegments "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("x轴长度")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("y轴长度")])]),t._v(" "),e("tr",[e("td",[t._v("widthSegments")]),t._v(" "),e("td",[t._v("x轴分段数")])]),t._v(" "),e("tr",[e("td",[t._v("heightSegments")]),t._v(" "),e("td",[t._v("y轴分段数")])])])]),t._v(" "),e("h3",{attrs:{id:"长方体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#长方体"}},[t._v("#")]),t._v(" 长方体")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CubeGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" widthSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" heightSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" depthSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("width")]),t._v(" "),e("td",[t._v("x轴长度")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("y轴长度")])]),t._v(" "),e("tr",[e("td",[t._v("depth")]),t._v(" "),e("td",[t._v("z轴长度")])]),t._v(" "),e("tr",[e("td",[t._v("widthSegments")]),t._v(" "),e("td",[t._v("x轴分段")])]),t._v(" "),e("tr",[e("td",[t._v("heightSegments")]),t._v(" "),e("td",[t._v("y轴分段")])]),t._v(" "),e("tr",[e("td",[t._v("depthSegments")]),t._v(" "),e("td",[t._v("z轴分段")])])])]),t._v(" "),e("h3",{attrs:{id:"圆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#圆"}},[t._v("#")]),t._v(" 圆")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CircleGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" segments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thetaStart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thetaLength"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("radius")]),t._v(" "),e("td",[t._v("半径")])]),t._v(" "),e("tr",[e("td",[t._v("segments")]),t._v(" "),e("td",[t._v("分段数")])]),t._v(" "),e("tr",[e("td",[t._v("thetaStart")]),t._v(" "),e("td",[t._v("开始的弧度")])]),t._v(" "),e("tr",[e("td",[t._v("thetaLength")]),t._v(" "),e("td",[t._v("跨过的弧度")])])])]),t._v(" "),e("h3",{attrs:{id:"球体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#球体"}},[t._v("#")]),t._v(" 球体")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SphereGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" segmentsWidth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" segmentsHeight"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" phiStart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" phiLength"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thetaStart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" thetaLength"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("radius")]),t._v(" "),e("td",[t._v("半径")])]),t._v(" "),e("tr",[e("td",[t._v("segmentsWidth")]),t._v(" "),e("td",[t._v("经度上的切片数")])]),t._v(" "),e("tr",[e("td",[t._v("segmentsHeight")]),t._v(" "),e("td",[t._v("纬度上的切片数")])]),t._v(" "),e("tr",[e("td",[t._v("phiStart")]),t._v(" "),e("td",[t._v("经度开始的弧度")])]),t._v(" "),e("tr",[e("td",[t._v("phiLength")]),t._v(" "),e("td",[t._v("经度跨过的弧度")])]),t._v(" "),e("tr",[e("td",[t._v("thetaStart")]),t._v(" "),e("td",[t._v("纬度开始的弧度")])]),t._v(" "),e("tr",[e("td",[t._v("thetaLength")]),t._v(" "),e("td",[t._v("纬度跨过的弧度")])])])]),t._v(" "),e("h3",{attrs:{id:"圆柱体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#圆柱体"}},[t._v("#")]),t._v(" 圆柱体")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("CylinderGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radiusTop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" radiusBottom"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" radiusSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" heightSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" openEnded"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("radiusTop")]),t._v(" "),e("td",[t._v("顶圆半径")])]),t._v(" "),e("tr",[e("td",[t._v("radiusBottom")]),t._v(" "),e("td",[t._v("底圆半径")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("高度")])]),t._v(" "),e("tr",[e("td",[t._v("radiusSegments")]),t._v(" "),e("td",[t._v("上下圆截面分段")])]),t._v(" "),e("tr",[e("td",[t._v("heightSegments")]),t._v(" "),e("td",[t._v("圆柱体竖直方向上分段")])]),t._v(" "),e("tr",[e("td",[t._v("openEnded")]),t._v(" "),e("td",[t._v("Boolean值，是否有顶面和底面，默认为true即有")])])])]),t._v(" "),e("h3",{attrs:{id:"正四面体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正四面体"}},[t._v("#")]),t._v(" 正四面体")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("TetrahedronGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" detail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("radius")]),t._v(" "),e("td",[t._v("半径")])]),t._v(" "),e("tr",[e("td",[t._v("detail")]),t._v(" "),e("td",[t._v("细节层次")])])])]),t._v(" "),e("h3",{attrs:{id:"圆环面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#圆环面"}},[t._v("#")]),t._v(" 圆环面")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("TorusGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" radialSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tubularSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("radius")]),t._v(" "),e("td",[t._v("圆环半径")])]),t._v(" "),e("tr",[e("td",[t._v("tube")]),t._v(" "),e("td",[t._v("管道半径")])]),t._v(" "),e("tr",[e("td",[t._v("radialSegments")]),t._v(" "),e("td",[t._v("圆环分段")])]),t._v(" "),e("tr",[e("td",[t._v("tubularSegments")]),t._v(" "),e("td",[t._v("管道分段")])]),t._v(" "),e("tr",[e("td",[t._v("arc")]),t._v(" "),e("td",[t._v("圆环弧度")])])])]),t._v(" "),e("h3",{attrs:{id:"圆环结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#圆环结"}},[t._v("#")]),t._v(" 圆环结")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("TorusKnotGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radius"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" radialSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tubularSegments"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" heightScale"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("radius")]),t._v(" "),e("td",[t._v("圆环半径")])]),t._v(" "),e("tr",[e("td",[t._v("tube")]),t._v(" "),e("td",[t._v("管道半径")])]),t._v(" "),e("tr",[e("td",[t._v("radialSegments")]),t._v(" "),e("td",[t._v("圆环分段")])]),t._v(" "),e("tr",[e("td",[t._v("tubularSegments")]),t._v(" "),e("td",[t._v("管道分段")])]),t._v(" "),e("tr",[e("td",[t._v("p")]),t._v(" "),e("td",[t._v("整个圆环围着圆心绕了多少圈")])]),t._v(" "),e("tr",[e("td",[t._v("q")]),t._v(" "),e("td",[t._v("整个圆环的内部扭了多少个结")])]),t._v(" "),e("tr",[e("td",[t._v("heightScale")]),t._v(" "),e("td",[t._v("z轴缩放")])])])]),t._v(" "),e("h3",{attrs:{id:"自定义形状"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义形状"}},[t._v("#")]),t._v(" 自定义形状")]),t._v(" "),e("p",[t._v("除了threejs提供的形状外，还可以自定义形状，自定义形状需要定义每一个顶点，对于复杂的图形可以导入模型，提供的demo有涉及到一些新的api，自行参考")]),t._v(" "),e("h2",{attrs:{id:"材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#材质"}},[t._v("#")]),t._v(" 材质")]),t._v(" "),e("p",[t._v("材质和灯光无法分割开来，所以我们放在一块学习")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://chasejourney.top/three_demo/index-4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/xwei111/three_demo/blob/master/index-4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"基本材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本材质"}},[t._v("#")]),t._v(" 基本材质")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MeshBasicMaterial")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("基本材质不会反光、不会产生阴影，不指定颜色时随机颜色，options常用属性如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("visible")]),t._v(" "),e("td",[t._v("是否可见，默认为true")])]),t._v(" "),e("tr",[e("td",[t._v("side")]),t._v(" "),e("td",[t._v("渲染面片正面或是反面，默认为正面THREE.FrontSide，可设置为反面THREE.BackSide，或双面THREE.DoubleSide")])]),t._v(" "),e("tr",[e("td",[t._v("wireframe")]),t._v(" "),e("td",[t._v("是否渲染线而非面")])]),t._v(" "),e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("颜色")])]),t._v(" "),e("tr",[e("td",[t._v("map")]),t._v(" "),e("td",[t._v("纹理")])])])]),t._v(" "),e("h3",{attrs:{id:"lambert材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lambert材质"}},[t._v("#")]),t._v(" Lambert材质")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MeshLambertMaterial")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Lambert光照模型的主要特点是只考虑漫反射而不考虑镜面反射的效果，因而对于金属、镜子等需要镜面反射效果的物体就不适应，对于其他大部分物体的漫反射效果都是适用的")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("颜色")])]),t._v(" "),e("tr",[e("td",[t._v("ambient")]),t._v(" "),e("td",[t._v("环境光（AmbientLight）反射颜色")])]),t._v(" "),e("tr",[e("td",[t._v("emissive")]),t._v(" "),e("td",[t._v("自发光颜色")])])])]),t._v(" "),e("h3",{attrs:{id:"phong材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#phong材质"}},[t._v("#")]),t._v(" Phong材质")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MeshPhongMaterial")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Phong材质除了Lambert材质特点还考虑了镜面反射的效果，因此对于金属、镜面的表现尤为适合")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("颜色")])]),t._v(" "),e("tr",[e("td",[t._v("ambient")]),t._v(" "),e("td",[t._v("环境光（AmbientLight）反射颜色")])]),t._v(" "),e("tr",[e("td",[t._v("emissive")]),t._v(" "),e("td",[t._v("自发光颜色")])]),t._v(" "),e("tr",[e("td",[t._v("specular")]),t._v(" "),e("td",[t._v("镜面反射系数")])]),t._v(" "),e("tr",[e("td",[t._v("shininess")]),t._v(" "),e("td",[t._v("光斑大小")])])])]),t._v(" "),e("h3",{attrs:{id:"法向材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#法向材质"}},[t._v("#")]),t._v(" 法向材质")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MeshNormalMaterial")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("法向材质不需要设置参数，适合调试")]),t._v(" "),e("h3",{attrs:{id:"纹理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#纹理"}},[t._v("#")]),t._v(" 纹理")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" texture "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ImageUtils"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadTexture")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./test.png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MeshLambertMaterial")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" map"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" texture "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"光"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#光"}},[t._v("#")]),t._v(" 光")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://chasejourney.top/three_demo/index-4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/xwei111/three_demo/blob/master/index-4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"环境光"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境光"}},[t._v("#")]),t._v(" 环境光")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AmbientLight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("环境光只需要指定颜色")]),t._v(" "),e("h3",{attrs:{id:"点光源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#点光源"}},[t._v("#")]),t._v(" 点光源")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("PointLight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intensity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" distance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("颜色")])]),t._v(" "),e("tr",[e("td",[t._v("intensity")]),t._v(" "),e("td",[t._v("亮度")])]),t._v(" "),e("tr",[e("td",[t._v("distance")]),t._v(" "),e("td",[t._v("最远距离")])])])]),t._v(" "),e("h3",{attrs:{id:"平行光"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平行光"}},[t._v("#")]),t._v(" 平行光")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("DirectionalLight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intensity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("颜色")])]),t._v(" "),e("tr",[e("td",[t._v("intensity")]),t._v(" "),e("td",[t._v("亮度")])])])]),t._v(" "),e("h3",{attrs:{id:"聚光灯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚光灯"}},[t._v("#")]),t._v(" 聚光灯")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SpotLight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" intensity"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" distance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" angle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("color")]),t._v(" "),e("td",[t._v("颜色")])]),t._v(" "),e("tr",[e("td",[t._v("intensity")]),t._v(" "),e("td",[t._v("亮度")])]),t._v(" "),e("tr",[e("td",[t._v("distance")]),t._v(" "),e("td",[t._v("最远距离")])]),t._v(" "),e("tr",[e("td",[t._v("angle")]),t._v(" "),e("td",[t._v("灯光角度，默认Math.PI / 3，最大Math.PI / 2")])]),t._v(" "),e("tr",[e("td",[t._v("exponent")]),t._v(" "),e("td",[t._v("光强在偏离target的衰减指数，默认10")])])])]),t._v(" "),e("h2",{attrs:{id:"阴影"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阴影"}},[t._v("#")]),t._v(" 阴影")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://chasejourney.top/three_demo/index-5.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/xwei111/three_demo/blob/master/index-5.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("接收阴影材质(产生阴影的材质)需要是"),e("code",[t._v("LambertMaterial")]),t._v("或者"),e("code",[t._v("PhongMaterial")])]),t._v(" "),e("li",[t._v("产生阴影的灯光可以为"),e("code",[t._v("PointLight")]),t._v("、"),e("code",[t._v("DirectionalLight")]),t._v("、"),e("code",[t._v("SpotLight")])])]),t._v(" "),e("p",[t._v("除了上述灯光和材质，还需要做一下配置")]),t._v(" "),e("ul",[e("li",[t._v("渲染器")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("renderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shadowMap"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ul",[e("li",[t._v("灯光")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("light"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("castShadow "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),e("ul",[e("li",[t._v("产生阴影物体")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("mesh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("castShadow "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),e("ul",[e("li",[t._v("接收阴影物体")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("mesh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("receiveShadow "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),e("p",[t._v("设置好以上条件就可以看到产生的阴影了")]),t._v(" "),e("h2",{attrs:{id:"字体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字体"}},[t._v("#")]),t._v(" 字体")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://chasejourney.top/three_demo/index-6.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/xwei111/three_demo/blob/master/index-6.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("THREE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("TextGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parameters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("size")]),t._v(" "),e("td",[t._v("字号")])]),t._v(" "),e("tr",[e("td",[t._v("height")]),t._v(" "),e("td",[t._v("文字厚度")])]),t._v(" "),e("tr",[e("td",[t._v("curveSegments")]),t._v(" "),e("td",[t._v("弧线分段数，使得文字的曲线更加光滑")])]),t._v(" "),e("tr",[e("td",[t._v("font")]),t._v(" "),e("td",[t._v("字体")])]),t._v(" "),e("tr",[e("td",[t._v("bevelEnabled")]),t._v(" "),e("td",[t._v("布尔值，是否开启斜角")])]),t._v(" "),e("tr",[e("td",[t._v("bevelThickness")]),t._v(" "),e("td",[t._v("文本上斜角的深度")])]),t._v(" "),e("tr",[e("td",[t._v("bevelSize")]),t._v(" "),e("td",[t._v("斜角与原始文本轮廓之间的延伸距离")])]),t._v(" "),e("tr",[e("td",[t._v("bevelSegments")]),t._v(" "),e("td",[t._v("斜角的分段数")])])])]),t._v(" "),e("p",[t._v("可以到"),e("a",{attrs:{href:"https://github.com/mrdoob/three.js/tree/master/examples/fonts",target:"_blank",rel:"noopener noreferrer"}},[t._v("文字"),e("OutboundLink")],1),t._v("下载自己需要的字体，文字像图片一样需要加载，如下")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loader "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FontLoader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nloader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./assets/fonts/gentilis_bold.typeface.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("font")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mesh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mesh")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Journey'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" font"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" font"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      material\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mesh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    renderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"外部模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#外部模型"}},[t._v("#")]),t._v(" 外部模型")]),t._v(" "),e("p",[t._v("对于一些复杂的几何体如果自己去画的话成本相当的高，所以引入外部模型会是一个非常好的选择")])])}),[],!1,null,null,null);a.default=n.exports}}]);