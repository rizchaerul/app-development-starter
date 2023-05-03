using ClosedXML.Excel;
using Microsoft.AspNetCore.Mvc;
using SixLabors.Fonts;

namespace WebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExcelController : ControllerBase
    {
        [HttpGet("get-fonts")]
        public ActionResult GetFonts()
        {
            return Ok(SystemFonts.Collection.Families.Select(x => new { x.Name }));
        }

        [HttpGet]
        public ActionResult Get()
        {
            var workbook = new XLWorkbook();
            var stream = new MemoryStream();

            var worksheet = workbook.Worksheets.Add("Employees");

            var row = 1;
            worksheet.Cell(row, 1).Value = "Employee ID";
            worksheet.Cell(row, 2).Value = "Name";

            row++;
            worksheet.Cell(row, 1).Value = "2023-0001";
            worksheet.Cell(row, 2).Value = "Chaerul Rizky";

            worksheet.Columns().AdjustToContents();

            workbook.SaveAs(stream);

            stream.Position = 0;
            return File(stream, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Excel File.xlsx");
        }
    }
}
