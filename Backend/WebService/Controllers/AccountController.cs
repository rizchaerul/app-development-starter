using Microsoft.AspNetCore.Mvc;
using WebService.Contracts.RequestModels;

namespace WebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        [HttpPost("register")]
        public ActionResult Register([FromBody] RegisterRequest request)
        {
            return Ok();
        }
    }
}
