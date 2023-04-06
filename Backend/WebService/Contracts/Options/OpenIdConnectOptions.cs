namespace WebService.Contracts.Options;

public class OpenIdConnectOptions
{
    public const string OpenIdConnect = "OpenIdConnect";

    public string Authority { get; set; } = string.Empty;
}
