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
    public class ServiceClass : ReportServiceBase
    {
        private DataTable customers;
        private DataColumn dataColumn1;
        private DataColumn dataColumn2;
        private System.ComponentModel.IContainer components;
        private DataColumn dataColumn3;
        private DataColumn dataColumn4;
        private PerpetuumSoft.Reporting.Components.InlineReportSlot inlineReportSlot1;
        private PerpetuumSoft.Reporting.Components.ReportManager reportManager1;
        private DataSet dataSet1;

        public ServiceClass()
        {
            InitializeComponent();
        }
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(ServiceClass));
            this.dataSet1 = new System.Data.DataSet();
            this.customers = new System.Data.DataTable();
            this.dataColumn1 = new System.Data.DataColumn();
            this.dataColumn2 = new System.Data.DataColumn();
            this.dataColumn3 = new System.Data.DataColumn();
            this.dataColumn4 = new System.Data.DataColumn();
            this.inlineReportSlot1 = new PerpetuumSoft.Reporting.Components.InlineReportSlot(this.components);
            this.reportManager1 = new PerpetuumSoft.Reporting.Components.ReportManager(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.dataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.customers)).BeginInit();
            // 
            // dataSet1
            // 
            this.dataSet1.DataSetName = "NewDataSet";
            this.dataSet1.Tables.AddRange(new System.Data.DataTable[] {
            this.customers});
            // 
            // customers
            // 
            this.customers.Columns.AddRange(new System.Data.DataColumn[] {
            this.dataColumn1,
            this.dataColumn2,
            this.dataColumn3,
            this.dataColumn4});
            this.customers.TableName = "Customers";
            // 
            // dataColumn1
            // 
            this.dataColumn1.ColumnName = "Name";
            // 
            // dataColumn2
            // 
            this.dataColumn2.ColumnName = "Phone";
            // 
            // dataColumn3
            // 
            this.dataColumn3.ColumnName = "Email";
            // 
            // dataColumn4
            // 
            this.dataColumn4.ColumnName = "Active";
            // 
            // inlineReportSlot1
            // 
            this.inlineReportSlot1.DocumentStream = resources.GetString("inlineReportSlot1.DocumentStream");
            this.inlineReportSlot1.ReportName = "CustomersReport";
            this.inlineReportSlot1.ReportScriptType = typeof(PerpetuumSoft.Reporting.Rendering.ReportScriptBase);
            // 
            // reportManager1
            // 
            this.reportManager1.DataSources = new PerpetuumSoft.Reporting.Components.ObjectPointerCollection(new string[] {
            "Customers"}, new object[] {
            ((object)(this.customers))});
            this.reportManager1.Reports.AddRange(new PerpetuumSoft.Reporting.Components.ReportSlot[] {
            this.inlineReportSlot1});
            // 
            // ServiceClass
            // 
            this.ReportManager = this.reportManager1;
            ((System.ComponentModel.ISupportInitialize)(this.dataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.customers)).EndInit();

        }
        protected override void OnLoadData(IDictionary<string, object> parameters, string reportName, PerpetuumSoft.Reporting.Components.ReportSlot reportSlot)
        {
            base.OnLoadData(parameters, reportName, reportSlot);
            DataRow row = customers.NewRow();
            row["Name"] = "Nguyễn Việt Anh";
            row["Phone"] = "0916322883";
            row["Email"] = "vietanhit95@gmail.com";
            row["Active"] = "Hoạt động";
            customers.Rows.Add(row);

            row = customers.NewRow();
            row["Name"] = "Hoàng Việt Anh";
            row["Phone"] = "0916322883";
            row["Email"] = "vietanhit95@gmail.com";
            row["Active"] = "Hoạt động";
            customers.Rows.Add(row);

            row = customers.NewRow();
            row["Name"] = "Trần Việt Anh";
            row["Phone"] = "0916322883";
            row["Email"] = "vietanhit95@gmail.com";
            row["Active"] = "Hoạt động";
            customers.Rows.Add(row);

            row = customers.NewRow();
            row["Name"] = "Trần Việt Anh";
            row["Phone"] = "0916322883";
            row["Email"] = "vietanhit95@gmail.com";
            row["Active"] = "Hoạt động";
            customers.Rows.Add(row);

            row = customers.NewRow();
            row["Name"] = "Trần Việt Anh";
            row["Phone"] = "0916322883";
            row["Email"] = "vietanhit95@gmail.com";
            row["Active"] = "Hoạt động";
            customers.Rows.Add(row);

            row = customers.NewRow();
            row["Name"] = "Trần Việt Anh";
            row["Phone"] = "0916322883";
            row["Email"] = "vietanhit95@gmail.com";
            row["Active"] = "Hoạt động";
            customers.Rows.Add(row);

            row = customers.NewRow();
            row["Name"] = "Trần Việt Anh";
            row["Phone"] = "0916322883";
            row["Email"] = "vietanhit95@gmail.com";
            row["Active"] = "Hoạt động";
            customers.Rows.Add(row);

            row = customers.NewRow();
            row["Name"] = "Trần Việt Anh";
            row["Phone"] = "0916322883";
            row["Email"] = "vietanhit95@gmail.com";
            row["Active"] = "Hoạt động";
            customers.Rows.Add(row);
        }

    }
}