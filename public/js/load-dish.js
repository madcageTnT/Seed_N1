/**
 * loadDishList
 */
$(document).ready(function() {
	var oTable = new TableInit();  //实例化Table
	oTable.Init();  //初始化数据
});
var TableInit = function() {
	var oTableInit = new Object();
	oTableInit.Init = function() {
		$('#tabDish').bootstrapTable(
		{
			url : "listAllDish.do",
			method : 'post',
			dataType : "json",
			toolbar : '#toolbar', //工具按钮用哪个容器
			striped : true, //是否显示行间隔色
			cache : false,
                        sortable: true,
			singleSelect : true,
			pagination : true, //分页
			pageNumber : 1, //初始化加载第一页，默认第一页
			pageSize : 10, //每页的记录行数（*）
			queryParams: oTableInit.queryParams,
			pageList : [ 10, 25, 50, 100 ], //可供选择的每页的行数（*）
			search : true, //显示搜索框
			showRefresh: true,
			showColumns: true,
			strictSearch: false,
			clickToSelect: true,
			sidePagination : "client", //服务端处理分页
			columns : [
			{
				field : 'imagePath',
				title : '图片',
				formatter : function(value,row,index){
					var image = '<image src="'+value+'" width="100px" height="100px" class="img-thumbnail" />';
					return image;
				}
			},
			{
				field : 'name',
				title : '名称'
			},
			{
				field : 'description',
				title : '描述'
			},
			{
				field : 'price',
				title : '价格'
			},
			{
				field : 'isDelete',
				title : '状态(0正常,1下架)'
			},
			{
				field : 'updateTime',
				title : '修改时间'
			},
			{
				field : 'createTime',
				title : '创建时间'
			},
			{
				title : '操作',
				field : 'dishId',
				align : 'center',
				formatter : function(value, row, index) {
					var e = '<a onclick="edit(\'' + row.dishId + '\',\'' + row.imagePath
					+ '\',\'' + row.name + '\',\''+row.isDelete+'\',\''+row.description+'\',\''+row.price+
					'\')">编辑</a>&nbsp';
					var d = '&nbsp<a href="#" onclick="del(\'' + row.dishId + '\')">下架</a> ';
					return e + d;
				}
			} ]
		})
	};
	oTableInit.queryParams = function (params) {
        var temp = {   //键的名字和控制器的变量名必须一致
            limit: params.limit,   //页面大小
            offset: params.offset  //页码
        };
        return temp;
    };
	return oTableInit;
}

//添加按钮事件
var add = function(){
	$('#modalEdit').modal("show");
	$('#iDishId').val('0');
	$('#iImage').attr('src','');
	$('#iName').val('');
	$('#iDescription').val('');
	$('#iPrice').val('');
	$('#iState').val('');
	$('#btnSubmit').text("添加");
};

//编辑按钮事件
var edit = function(id,image,name,state,description,price) {
	$('#modalEdit').modal("show");
	$('#btnSubmit').text("编辑");
	$('#iDishId').val(id);
	$('#iImage').attr('src',image);
	$('#iName').val(name);
	$('#iDescription').val(description);
	$('#iPrice').attr('value',price);
	$('#iState').attr('value',state);
};

//提交操作AJAX请求
var submitDishAjax = function(ajaxUrl,saveData){
	$.ajax({ 
        type:"post", 
        url: ajaxUrl, 
        dataType:"json",      
        contentType:"application/json",              
        data:JSON.stringify(saveData), 
        success:function(message){
        	if(message !=0){
        		$('#modalEdit').modal("hide");
        		$('#tabDish').bootstrapTable('refresh');
        	}
        	else
        		alert("failure");
        }
    });
};

//提交操作
var submitEdit = function(){
	var saveData = {"dishId":$('#iDishId').val(),"imagePath":$('#iImage').attr('src'),"name":$('#iName').val(),"description":$('#iDescription').val(),"price":$('#iPrice').val(),"state":$('#iState').val()};
	var editUrl = "updateDish.do";
	var btnText = $('#btnSubmit').text();
	if(btnText == "编辑") {
		var url = "updateDish.do";
		submitDishAjax(url , saveData);
	}
	else if (btnText == "添加") {
		var url = "addDish.do";
		submitDishAjax(url , saveData);
	}
};

//删除请求
var del = function(id) {
	$.ajax({
		url : 'deleteDish.do',
		data : {
			dishId : id,
		},
		method : 'post',
		success : function(message) {
			if (message == 1) {
				alert("success");
				$('#tabDish').bootstrapTable('refresh');
			} else
				alert("failure");
		}
	})
};

var uploadPho = function() {
	var formData = new FormData($("#uploadPhoForm")[0]);
	$.ajax({
		url : 'uploadDishPic.do',
		data : formData,
		method : 'post',
		contentType: false,
		processData: false,
		success : function(message) {
			$('#iImage').attr('src',message);
		}
	})
};





