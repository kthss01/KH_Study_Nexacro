(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("F_CheckBox");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","39","40","172","52",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("> CheckBox 기본형태");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","39","105","232","57",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("체크박스 기본");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","39","180","172","52",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("> CheckBox 변형형태");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","39","245","116","57",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("왼쪽");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","165","245","116","57",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("오른쪽");
            obj.set_iconPosition("right");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00","417","245","116","57",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("아래쪽");
            obj.set_iconPosition("bottom");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01","291","245","116","57",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("위쪽");
            obj.set_iconPosition("top");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("F_CheckBox.xfdl", function() {

        this.chk_01_onchanged = function(obj,e)
        {
        	alert("값 선택 확인 : " + obj.value);
        };

        this.chk_all_onchanged = function(obj,e)
        {
        	alert("값 선택 확인 : " + obj.value + " " + obj.id);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.chk_01.addEventHandler("onchanged",this.chk_01_onchanged,this);
            this.CheckBox00_00.addEventHandler("onchanged",this.chk_all_onchanged,this);
            this.CheckBox00_00_00.addEventHandler("onchanged",this.chk_all_onchanged,this);
            this.CheckBox00_00_00_00.addEventHandler("onchanged",this.chk_all_onchanged,this);
            this.CheckBox00_00_01.addEventHandler("onchanged",this.chk_all_onchanged,this);
        };

        this.loadIncludeScript("F_CheckBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
