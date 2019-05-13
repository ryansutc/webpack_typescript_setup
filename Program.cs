using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace webpack_test
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var host = new WebHostBuilder()
        .UseWebRoot(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "dist"))
        .UseKestrel()
        .UseStartup<Startup>()
        //.UseApplicationInsights()
        .UseContentRoot(Directory.GetCurrentDirectory())
        .UseIISIntegration()
        .Build();
      host.Run();
      //CreateWebHostBuilder(args).Build().Run();
    }

    public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>();
  }
}
