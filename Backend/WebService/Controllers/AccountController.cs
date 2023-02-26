using Database.Entities;
using Microsoft.AspNetCore.Mvc;
using WebService.Contracts.RequestModels;

namespace WebService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public AccountController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] RegisterRequest request)
        {
            var newUser = new User
            {
                Id = Guid.NewGuid(),
                Email = request.Email,
                Password = request.Password,
            };

            _db.Users.Add(newUser);
            await _db.SaveChangesAsync();

            return Ok();
        }
    }
}
