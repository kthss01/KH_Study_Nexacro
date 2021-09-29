(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_01","43","62","147","98",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("hello nexacro");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","293","67","147","73",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("버튼입니다");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("A_Test.xfdl", function() {

        this.A_Test_onload = function(obj,e)
        {
        	alert("화면로딩");
        };

        this.btn_01_onclick = function(obj,e)
        {
        	this.alert("클릭햇습니다");
        	trace("btn_01_onclick 클릭");
        };
        /**/
        //
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.A_Test_onload,this);
            this.sta_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
        };

        this.loadIncludeScript("A_Test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
