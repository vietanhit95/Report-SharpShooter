﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ServiceModel.Activation;
using System.Data;
using PerpetuumSoft.Reporting.WebViewer.Server;


namespace SharpShooterWebViewerMVC
{
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class ServiceGroupClass : ReportServiceBase
    {
        private DataTable khachang;
        private DataColumn dataColumn1;
        private DataColumn dataColumn2;
        private DataColumn dataColumn3;
        private PerpetuumSoft.Reporting.Components.ReportManager reportManager1;
        private System.ComponentModel.IContainer components;
        private PerpetuumSoft.Reporting.Components.InlineReportSlot inlineReportSlot1;
        private PerpetuumSoft.Reporting.Components.InlineReportSlot inlineReportSlot2;
        private DataSet dataSet1;

        public ServiceGroupClass()
        {
            InitializeComponent();
        }
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(ServiceGroupClass));
            this.dataSet1 = new System.Data.DataSet();
            this.khachang = new System.Data.DataTable();
            this.dataColumn1 = new System.Data.DataColumn();
            this.dataColumn2 = new System.Data.DataColumn();
            this.dataColumn3 = new System.Data.DataColumn();
            this.reportManager1 = new PerpetuumSoft.Reporting.Components.ReportManager(this.components);
            this.inlineReportSlot1 = new PerpetuumSoft.Reporting.Components.InlineReportSlot(this.components);
            this.inlineReportSlot2 = new PerpetuumSoft.Reporting.Components.InlineReportSlot(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.dataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.khachang)).BeginInit();
            // 
            // dataSet1
            // 
            this.dataSet1.DataSetName = "NewDataSet";
            this.dataSet1.Tables.AddRange(new System.Data.DataTable[] {
            this.khachang});
            // 
            // khachang
            // 
            this.khachang.Columns.AddRange(new System.Data.DataColumn[] {
            this.dataColumn1,
            this.dataColumn2,
            this.dataColumn3});
            this.khachang.TableName = "KhacHang";
            // 
            // dataColumn1
            // 
            this.dataColumn1.ColumnName = "Name";
            // 
            // dataColumn2
            // 
            this.dataColumn2.ColumnName = "PhoneNumber";
            // 
            // dataColumn3
            // 
            this.dataColumn3.ColumnName = "Address";
            // 
            // reportManager1
            // 
            this.reportManager1.DataSources = new PerpetuumSoft.Reporting.Components.ObjectPointerCollection(new string[] {
            "KhachHang"}, new object[] {
            ((object)(this.khachang))});
            this.reportManager1.Reports.AddRange(new PerpetuumSoft.Reporting.Components.ReportSlot[] {
            this.inlineReportSlot1,
            this.inlineReportSlot2});
            // 
            // inlineReportSlot1
            // 
            this.inlineReportSlot1.DocumentStream = resources.GetString("inlineReportSlot1.DocumentStream");
            this.inlineReportSlot1.ReportName = "KhachHangRP";
            this.inlineReportSlot1.ReportScriptType = typeof(PerpetuumSoft.Reporting.Rendering.ReportScriptBase);
            // 
            // inlineReportSlot2
            // 
            this.inlineReportSlot2.DocumentStream = resources.GetString("inlineReportSlot2.DocumentStream");
            this.inlineReportSlot2.ReportName = "Group";
            this.inlineReportSlot2.ReportScriptType = typeof(PerpetuumSoft.Reporting.Rendering.ReportScriptBase);
            // 
            // ServiceGroupClass
            // 
            this.ReportManager = this.reportManager1;
            ((System.ComponentModel.ISupportInitialize)(this.dataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.khachang)).EndInit();

        }
        protected override void OnLoadData(IDictionary<string, object> parameters, string reportName, PerpetuumSoft.Reporting.Components.ReportSlot reportSlot)
        {
            base.OnLoadData(parameters, reportName, reportSlot);
            DataRow row = khachang.NewRow();
            row["Name"] = "Nguyễn Việt Anh";
            row["PhoneNumber"] = "0916322883";
            row["Address"] = "Hưng Yên";
            khachang.Rows.Add(row);

            row = khachang.NewRow();
            row["Name"] = "Hoàng Việt Anh";
            row["PhoneNumber"] = "0916322883";
            row["Address"] = "Hà Nội";
            khachang.Rows.Add(row);

            row = khachang.NewRow();
            row["Name"] = "Trần Việt Anh";
            row["PhoneNumber"] = "0916322883";
            row["Address"] = "Hà Nội";
            khachang.Rows.Add(row);

            row = khachang.NewRow();
            row["Name"] = "Cao Việt Anh";
            row["PhoneNumber"] = "0916322883";
            row["Address"] = "Hà Nội";
            khachang.Rows.Add(row);

            row = khachang.NewRow();
            row["Name"] = "Minh Việt Anh";
            row["PhoneNumber"] = "0916322883";
            row["Address"] = "Hưng Yên";
            khachang.Rows.Add(row);

            row = khachang.NewRow();
            row["Name"] = "Lương Việt Anh";
            row["PhoneNumber"] = "0916322883";
            row["Address"] = "Hưng Yên";
            khachang.Rows.Add(row);

            row = khachang.NewRow();
            row["Name"] = "Phùng Việt Anh";
            row["PhoneNumber"] = "0916322883";
            row["Address"] = "Hưng Yên";
            khachang.Rows.Add(row);

            row = khachang.NewRow();
            row["Name"] = "Kiều Việt Anh";
            row["PhoneNumber"] = "0916322883";
            row["Address"] = "Hà Nội";
            khachang.Rows.Add(row);
        }
    }
}