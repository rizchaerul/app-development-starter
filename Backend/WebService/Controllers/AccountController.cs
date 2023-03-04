using Database.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OpenIddict.Validation.AspNetCore;
using WebService.Contracts.RequestModels;
using WebService.Contracts.ResponseModels;

namespace WebService.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public AccountController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)]
        public async Task<ActionResult<List<UserListItemResponse>>> GetUsers(int page = 1, int perPage = 1)
        {
            var users = await _db.Users
                .Select(x => new UserListItemResponse
                {
                    Email = x.Email,
                })
                .Skip(perPage * (page - 1))
                .Take(perPage)
                .ToListAsync();

            return users;
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
