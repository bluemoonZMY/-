Page({
    data: {
        leftwidth: 1,
        isPopping: false, //是否已经弹出
        leftCol: {},
        content:{
            f1: '第一章',
            f2: '第二章',
            f3: '第三章',
            f4: '第四章',
            f5: '第五章'
        },
        isPopping: false,//是否已经弹出
        animPlus: {},//旋转动画
        animCollect: {},//item位移,透明度
        animTranspond: {},//item位移,透明度
        animInput: {},//item位移,透明度

    },
    onLoad: function (options) {
        this.setData({
            left: {
                Width: 0
            },
        })
    },

    contenttap: function (e) {
        this.setData({
            left: {
                Width: this.data.leftwidth + 100
            },
            num1:this.data.content.f1,
            num2:this.data.content.f2,
            num3:this.data.content.f3,
            num4:this.data.content.f4,
            num5:this.data.content.f5
        })
console.log(this.data.content)

    },


    plus: function () {
        if (this.data.isPopping) {
            //缩回动画
            this.popp();
            this.setData({
                isPopping: false
            })
        } else if (!this.data.isPopping) {
            //弹出动画
            this.takeback();
            this.setData({
                isPopping: true
            })
        }
    },
    input: function () {
        var bgColor = this.data.pageColor == 'red' ? '#5cb85c' : 'red';
        this.setData({
            pageColor: bgColor
            
            });
    },
    transpond: function () {
        console.log("transpond")
        var bgColor = this.data.pageBackgroundColor == '#f0e68c' ? '#87CEFA' : '#f0e68c';
        this.setData({
            pageBackgroundColor: bgColor
            
            });
    },
    collect: function () {
        console.log("collect")
    },
 
    //弹出动画
    popp: function () {
        //plus顺时针旋转
        var animationPlus = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animationcollect = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animationTranspond = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animationInput = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        animationPlus.rotateZ(180).step();
        animationcollect.translate(-50, -50).rotateZ(180).opacity(1).step();
        animationTranspond.translate(-70, 0).rotateZ(180).opacity(1).step();
        animationInput.translate(-50, 50).rotateZ(180).opacity(1).step();
        this.setData({
            animPlus: animationPlus.export(),
            animCollect: animationcollect.export(),
            animTranspond: animationTranspond.export(),
            animInput: animationInput.export(),
        })
    },

    takeback: function () {

        var animationPlus = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animationcollect = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animationTranspond = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        var animationInput = wx.createAnimation({
            duration: 500,
            timingFunction: 'ease-out'
        })
        animationPlus.rotateZ(0).step();
        animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
        animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();
        animationInput.translate(0, 0).rotateZ(0).opacity(0).step();
        this.setData({
            animPlus: animationPlus.export(),
            animCollect: animationcollect.export(),
            animTranspond: animationTranspond.export(),
            animInput: animationInput.export(),
        })
    }
















})