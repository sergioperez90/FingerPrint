using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FingerPrint.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "FingerPrint2";
            return View();
        }

        public ActionResult ClientJS()
        {
            ViewBag.Title = "ClientJS";

            return View();
        }

       
    }
}