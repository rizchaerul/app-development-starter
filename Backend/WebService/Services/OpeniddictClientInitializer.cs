using Database.Entities;
using OpenIddict.Abstractions;

namespace WebService.Services
{
    public class OpeniddictClientInitializer : IHostedService
    {
        private readonly IServiceProvider _serviceProvider;

        public OpeniddictClientInitializer(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task StartAsync(CancellationToken cancellationToken)
        {
            using var scope = _serviceProvider.CreateScope();

            var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var manager = scope.ServiceProvider.GetRequiredService<IOpenIddictApplicationManager>();

            var postman = await manager.FindByClientIdAsync("postman", cancellationToken);
            var frontend = await manager.FindByClientIdAsync("frontend", cancellationToken);

            // if (postman != null)
            // {
            //     await manager.DeleteAsync(postman, cancellationToken);
            //     postman = null;
            // }
            // if (frontend != null)
            // {
            //     await manager.DeleteAsync(frontend, cancellationToken);
            //     frontend = null;
            // }

            if (postman is null)
            {
                await manager.CreateAsync(new OpenIddictApplicationDescriptor
                {
                    ClientId = "postman",
                    ClientSecret = "postman-secret",
                    DisplayName = "Postman",
                    RedirectUris = { new Uri("https://oauth.pstmn.io/v1/callback") },
                    Permissions =
                    {
                        OpenIddictConstants.Permissions.Endpoints.Authorization,
                        OpenIddictConstants.Permissions.Endpoints.Token,
                        OpenIddictConstants.Permissions.Endpoints.Logout,

                        OpenIddictConstants.Permissions.GrantTypes.AuthorizationCode,
                        OpenIddictConstants.Permissions.GrantTypes.ClientCredentials,
                        OpenIddictConstants.Permissions.GrantTypes.RefreshToken,

                        OpenIddictConstants.Permissions.Prefixes.Scope + "api",

                        OpenIddictConstants.Permissions.ResponseTypes.Code,
                    }
                }, cancellationToken);
            }

            if (frontend is null)
            {
                await manager.CreateAsync(new OpenIddictApplicationDescriptor
                {
                    ClientId = "frontend",
                    DisplayName = "Frontend",
                    PostLogoutRedirectUris = { new Uri("http://localhost:3000") },
                    RedirectUris =
                    {
                        new Uri("http://localhost:3000/account/login-callback"),
                        new Uri("http://localhost:3000/silent-renew.html"),
                        new Uri("http://localhost:5000/swagger/oauth2-redirect.html"),
                    },
                    Permissions =
                    {
                        OpenIddictConstants.Permissions.Endpoints.Authorization,
                        OpenIddictConstants.Permissions.Endpoints.Token,
                        OpenIddictConstants.Permissions.Endpoints.Logout,

                        OpenIddictConstants.Permissions.GrantTypes.AuthorizationCode,
                        OpenIddictConstants.Permissions.GrantTypes.RefreshToken,

                        OpenIddictConstants.Permissions.Scopes.Email,
                        OpenIddictConstants.Permissions.Scopes.Profile,
                        OpenIddictConstants.Permissions.Prefixes.Scope + "api",

                        OpenIddictConstants.Permissions.ResponseTypes.Code,
                    }
                }, cancellationToken);
            }
        }

        public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
    }
}
