using Database.Entities;
using Microsoft.Extensions.Options;
using OpenIddict.Abstractions;
using WebService.Contracts.Options;

namespace WebService.Services
{
    public class OpeniddictClientInitializer : IHostedService
    {
        private readonly IServiceProvider _serviceProvider;

        public OpeniddictClientInitializer(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task StartAsync(CancellationToken ct)
        {
            var clients = _serviceProvider
                .GetRequiredService<IOptions<OpenIddictOptions>>()
                .Value
                .Clients;

            using var scope = _serviceProvider.CreateScope();

            var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
            var manager = scope.ServiceProvider.GetRequiredService<IOpenIddictApplicationManager>();

            foreach (var client in clients)
            {
                var openiddictClient = await manager.FindByClientIdAsync(client.ClientId, ct);

                if (openiddictClient == null)
                {
                    var descriptor = new OpenIddictApplicationDescriptor
                    {
                        ClientId = client.ClientId,
                        ClientSecret = client.ClientSecret,
                        DisplayName = client.ClientId,
                    };

                    foreach (var redirectUri in client.RedirectUris)
                    {
                        descriptor.RedirectUris.Add(new Uri(redirectUri));
                    }

                    foreach (var permissions in client.Permissions)
                    {
                        // OpenIddictConstants.Permissions.Endpoints
                        // OpenIddictConstants.Permissions.GrantTypes
                        // OpenIddictConstants.Permissions.Scopes
                        // OpenIddictConstants.Permissions.ResponseTypes
                        // OpenIddictConstants.Permissions.Prefixes

                        descriptor.Permissions.Add(permissions);
                    }

                    await manager.CreateAsync(descriptor, ct);
                }
            }
        }

        public Task StopAsync(CancellationToken ct) => Task.CompletedTask;
    }
}
