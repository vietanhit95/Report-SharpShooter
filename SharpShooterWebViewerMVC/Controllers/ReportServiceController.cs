﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PerpetuumSoft.Reporting.WebViewer.Server.Mvc;

namespace SharpShooterWebViewerMVC.Controllers
{
    public class ReportServiceController : ReportServiceBaseController
    {
        // GET: ReportService
        protected override PerpetuumSoft.Reporting.WebViewer.Server.ReportServiceBase CreateReportService()
        {
            return new ServiceClass();
        }

    }
}