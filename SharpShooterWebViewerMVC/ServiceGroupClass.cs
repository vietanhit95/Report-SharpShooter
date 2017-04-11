using System;
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
        private PerpetuumSoft.Reporting.Components.InlineReportSlot inlineReportSlot3;
        private DataSet dataSet2;
        private DataTable dataTable1;
        private DataColumn dataColumn4;
        private DataColumn dataColumn5;
        private DataColumn dataColumn6;
        private DataColumn dataColumn7;
        private DataColumn dataColumn8;
        private PerpetuumSoft.Reporting.Components.InlineReportSlot inlineReportSlot4;
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
            this.dataTable1 = new System.Data.DataTable();
            this.dataColumn4 = new System.Data.DataColumn();
            this.dataColumn5 = new System.Data.DataColumn();
            this.dataColumn6 = new System.Data.DataColumn();
            this.dataColumn7 = new System.Data.DataColumn();
            this.dataColumn8 = new System.Data.DataColumn();
            this.inlineReportSlot1 = new PerpetuumSoft.Reporting.Components.InlineReportSlot(this.components);
            this.inlineReportSlot2 = new PerpetuumSoft.Reporting.Components.InlineReportSlot(this.components);
            this.inlineReportSlot3 = new PerpetuumSoft.Reporting.Components.InlineReportSlot(this.components);
            this.dataSet2 = new System.Data.DataSet();
            this.inlineReportSlot4 = new PerpetuumSoft.Reporting.Components.InlineReportSlot(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.dataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.khachang)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataTable1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataSet2)).BeginInit();
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
            "KhachHang",
            "New_Name"}, new object[] {
            ((object)(this.khachang)),
            ((object)(this.dataTable1))});
            this.reportManager1.Reports.AddRange(new PerpetuumSoft.Reporting.Components.ReportSlot[] {
            this.inlineReportSlot1,
            this.inlineReportSlot2,
            this.inlineReportSlot3,
            this.inlineReportSlot4});
            // 
            // dataTable1
            // 
            this.dataTable1.Columns.AddRange(new System.Data.DataColumn[] {
            this.dataColumn4,
            this.dataColumn5,
            this.dataColumn6,
            this.dataColumn7,
            this.dataColumn8});
            this.dataTable1.TableName = "Member";
            // 
            // dataColumn4
            // 
            this.dataColumn4.ColumnName = "Name";
            // 
            // dataColumn5
            // 
            this.dataColumn5.ColumnName = "Old";
            // 
            // dataColumn6
            // 
            this.dataColumn6.ColumnName = "Address";
            // 
            // dataColumn7
            // 
            this.dataColumn7.ColumnName = "Provine";
            // 
            // dataColumn8
            // 
            this.dataColumn8.ColumnName = "Note";
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
            // inlineReportSlot3
            // 
            this.inlineReportSlot3.DocumentStream = resources.GetString("inlineReportSlot3.DocumentStream");
            this.inlineReportSlot3.ReportName = "SidebySide";
            this.inlineReportSlot3.ReportScriptType = typeof(PerpetuumSoft.Reporting.Rendering.ReportScriptBase);
            // 
            // dataSet2
            // 
            this.dataSet2.DataSetName = "NewDataSet";
            this.dataSet2.Tables.AddRange(new System.Data.DataTable[] {
            this.dataTable1});
            // 
            // inlineReportSlot4
            // 
            this.inlineReportSlot4.DocumentStream = resources.GetString("inlineReportSlot4.DocumentStream");
            this.inlineReportSlot4.ReportName = "MultiBand";
            this.inlineReportSlot4.ReportScriptType = typeof(PerpetuumSoft.Reporting.Rendering.ReportScriptBase);
            // 
            // ServiceGroupClass
            // 
            this.ReportManager = this.reportManager1;
            ((System.ComponentModel.ISupportInitialize)(this.dataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.khachang)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataTable1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataSet2)).EndInit();

        }
        protected override void OnLoadData(IDictionary<string, object> parameters, string reportName, PerpetuumSoft.Reporting.Components.ReportSlot reportSlot)
        {
            base.OnLoadData(parameters, reportName, reportSlot);
            DataRow row = khachang.NewRow();
            DataRow row2 = dataTable1.NewRow();
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


            row2 = dataTable1.NewRow();
            row2["Name"] = "Nguyễn Việt Anh";
            row2["Old"] = "23";
            row2["Address"] = "Hưng Yên";
            row2["Provine"] = "Hưng Yên";
            row2["Note"] = "Ngon";
            dataTable1.Rows.Add(row2);

            row2 = dataTable1.NewRow();
            row2["Name"] = "Hoàng Việt Anh";
            row2["Old"] = "23";
            row2["Address"] = "Hưng Yên";
            row2["Provine"] = "Hưng Yên";
            row2["Note"] = "Ngon";
            dataTable1.Rows.Add(row2);

            row2 = dataTable1.NewRow();
            row2["Name"] = "Trần Việt Anh";
            row2["Old"] = "23";
            row2["Address"] = "Hưng Yên";
            row2["Provine"] = "Hưng Yên";
            row2["Note"] = "Ngon";
            dataTable1.Rows.Add(row2);

            row2 = dataTable1.NewRow();
            row2["Name"] = "Duy Việt Anh";
            row2["Old"] = "23";
            row2["Address"] = "Hưng Yên";
            row2["Provine"] = "Hưng Yên";
            row2["Note"] = "Ngon";
            dataTable1.Rows.Add(row2);

            row2 = dataTable1.NewRow();
            row2["Name"] = "Minh Việt Anh";
            row2["Old"] = "23";
            row2["Address"] = "Hưng Yên";
            row2["Provine"] = "Hưng Yên";
            row2["Note"] = "Ngon";
            dataTable1.Rows.Add(row2);
        }
    }
}