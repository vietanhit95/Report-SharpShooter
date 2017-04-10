/*****************************************************************************\

  This file and the source code included in it are copyright of 
  Perpetuum Software LLC - © 2002 - 2014 Perpetuum Software LLC. 
  All rights reserved.

  Any redistribution or reproduction of the file or its part or 
  the source code in a manner other than stated under the following 
  End User License Agreement is prohibited:
  http://www.perpetuumsoft.com/Product.aspx?lang=en&pid=143&tid=license

\*****************************************************************************/

// PerpetuumSoft.Reporting.WebViewer.Client.Model.js
(function(){
Type.registerNamespace('PerpetuumSoft.Reporting.WebViewer.Model');PerpetuumSoft.Reporting.WebViewer.Model.ExceptionType=function(){};PerpetuumSoft.Reporting.WebViewer.Model.ExceptionType.prototype = {outOfCache:1,emptyRequest:2,invalidDocumentId:3,emptyReportName:4,reportNotFound:5,templateIsNull:6,controlIndexOutOfRange:7,pageNumberOutOfRange:8,exportFormatIsNotDefined:9,reportManagerNotDefined:10,reportSlotNotFount:11,sizeNullError:12,sizePositiveError:13,incorrectExportFormat:14,reportServiceNull:15}
PerpetuumSoft.Reporting.WebViewer.Model.ExceptionType.registerEnum('PerpetuumSoft.Reporting.WebViewer.Model.ExceptionType',false);PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel.prototype={DocumentId:null}
PerpetuumSoft.Reporting.WebViewer.Model.DocumentInfoModel=function(){PerpetuumSoft.Reporting.WebViewer.Model.DocumentInfoModel.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.DocumentInfoModel.prototype={Title:null,HasDocumentMap:false,Pages:null}
PerpetuumSoft.Reporting.WebViewer.Model.DocumentMapInfoModel=function(){PerpetuumSoft.Reporting.WebViewer.Model.DocumentMapInfoModel.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.DocumentMapInfoModel.prototype={DocumentMap:null}
PerpetuumSoft.Reporting.WebViewer.Model.ElementSizeModel=function(width,height){this.Width=width;this.Height=height;}
PerpetuumSoft.Reporting.WebViewer.Model.ElementSizeModel.prototype={Width:0,Height:0}
PerpetuumSoft.Reporting.WebViewer.Model.ErrorInfoModel=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.ErrorInfoModel.prototype={Message:null,ErrorInformation:null,ErrorType:0}
PerpetuumSoft.Reporting.WebViewer.Model.FoundItemModel=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.FoundItemModel.prototype={ElementsUniqueId:null,PositionX:0,PositionY:0,Width:0,Height:0}
PerpetuumSoft.Reporting.WebViewer.Model.HtmlRenderingCompartabilitySettings=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.HtmlRenderingCompartabilitySettings.prototype={UseCSS3Transforms:false}
PerpetuumSoft.Reporting.WebViewer.Model.PageInfoModel=function(){PerpetuumSoft.Reporting.WebViewer.Model.PageInfoModel.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.PageInfoModel.prototype={PageContent:null,PageNumber:0,Loaded:false,Loading:false}
PerpetuumSoft.Reporting.WebViewer.Model.ParameterModel=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.ParameterModel.prototype={Name:null,Value:null,Type:null,DefaultValue:null}
PerpetuumSoft.Reporting.WebViewer.Model.ReportParametersModel=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.ReportParametersModel.prototype={ReportParameters:null}
PerpetuumSoft.Reporting.WebViewer.Model.FindTextRequest=function(){PerpetuumSoft.Reporting.WebViewer.Model.FindTextRequest.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.FindTextRequest.prototype={Text:null,LastPageIndex:0,DirectSearch:false}
PerpetuumSoft.Reporting.WebViewer.Model.FullRequest=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.FullRequest.prototype={DocumentInfoRequest:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoRequest=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoRequest.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoRequest.prototype={Parameters:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoFullRequest=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoFullRequest.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoFullRequest.prototype={DocumentMapInfoRequest:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoRequest=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoRequest.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoFullRequest=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoFullRequest.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoFullRequest.prototype={PageInfoRequest:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoRequest=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoRequest.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoRequest.prototype={PageNumber:0,CompartabilitySettings:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersRequest=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersRequest.prototype={ReportName:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoFullRequest=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoFullRequest.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoFullRequest.prototype={ThumbnailsInfoRequest:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoRequest=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoRequest.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoRequest.prototype={ThumbnailSize:null}
PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel.prototype={Error:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoResponse=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoResponse.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoResponse.prototype={Result:null}
PerpetuumSoft.Reporting.WebViewer.Model.FindTextResponse=function(){PerpetuumSoft.Reporting.WebViewer.Model.FindTextResponse.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.FindTextResponse.prototype={Found:false,PageIndex:0,DirectSearch:false,FoundItems:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoResponse=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoResponse.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoResponse.prototype={Result:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoResponse=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoResponse.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoResponse.prototype={Result:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersResponse=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersResponse.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersResponse.prototype={Result:null}
PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoResponse=function(){PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoResponse.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoResponse.prototype={Result:null}
PerpetuumSoft.Reporting.WebViewer.Model.ThumbnailsInfoModel=function(){PerpetuumSoft.Reporting.WebViewer.Model.ThumbnailsInfoModel.initializeBase(this);}
PerpetuumSoft.Reporting.WebViewer.Model.ThumbnailsInfoModel.prototype={ThumbnailsLink:null,ThumbnailSize:null}
PerpetuumSoft.Reporting.WebViewer.Model.ThumbnailSizeModel=function(width,height){this.Width=width;this.Height=height;}
PerpetuumSoft.Reporting.WebViewer.Model.ThumbnailSizeModel.prototype={Width:0,Height:0}
PerpetuumSoft.Reporting.WebViewer.Model.BookmarkInfo=function(){}
PerpetuumSoft.Reporting.WebViewer.Model.BookmarkInfo.prototype={pageNumber:0,x:0,y:0}
PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel');PerpetuumSoft.Reporting.WebViewer.Model.DocumentInfoModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.DocumentInfoModel',PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel);PerpetuumSoft.Reporting.WebViewer.Model.DocumentMapInfoModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.DocumentMapInfoModel',PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel);PerpetuumSoft.Reporting.WebViewer.Model.ElementSizeModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.ElementSizeModel');PerpetuumSoft.Reporting.WebViewer.Model.ErrorInfoModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.ErrorInfoModel');PerpetuumSoft.Reporting.WebViewer.Model.FoundItemModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.FoundItemModel');PerpetuumSoft.Reporting.WebViewer.Model.HtmlRenderingCompartabilitySettings.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.HtmlRenderingCompartabilitySettings');PerpetuumSoft.Reporting.WebViewer.Model.PageInfoModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.PageInfoModel',PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel);PerpetuumSoft.Reporting.WebViewer.Model.ParameterModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.ParameterModel');PerpetuumSoft.Reporting.WebViewer.Model.ReportParametersModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.ReportParametersModel');PerpetuumSoft.Reporting.WebViewer.Model.FindTextRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.FindTextRequest',PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel);PerpetuumSoft.Reporting.WebViewer.Model.FullRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.FullRequest');PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersRequest');PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoRequest',PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersRequest);PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoFullRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoFullRequest',PerpetuumSoft.Reporting.WebViewer.Model.FullRequest);PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoRequest',PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel);PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoFullRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoFullRequest',PerpetuumSoft.Reporting.WebViewer.Model.FullRequest);PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoRequest',PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel);PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoFullRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoFullRequest',PerpetuumSoft.Reporting.WebViewer.Model.FullRequest);PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoRequest.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoRequest',PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel);PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel');PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoResponse.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentMapInfoResponse',PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel);PerpetuumSoft.Reporting.WebViewer.Model.FindTextResponse.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.FindTextResponse',PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel);PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoResponse.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadDocumentInfoResponse',PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel);PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoResponse.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadPageInfoResponse',PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel);PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersResponse.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadReportParametersResponse',PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel);PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoResponse.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.LoadThumbnailsInfoResponse',PerpetuumSoft.Reporting.WebViewer.Model.BaseResponseModel);PerpetuumSoft.Reporting.WebViewer.Model.ThumbnailsInfoModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.ThumbnailsInfoModel',PerpetuumSoft.Reporting.WebViewer.Model.DocumentIdModel);PerpetuumSoft.Reporting.WebViewer.Model.ThumbnailSizeModel.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.ThumbnailSizeModel');PerpetuumSoft.Reporting.WebViewer.Model.BookmarkInfo.registerClass('PerpetuumSoft.Reporting.WebViewer.Model.BookmarkInfo');})();// This script was generated using Script# v0.7.4.0
