namespace WebService.Contracts.Settings;

public class OpenIdConnectSettings
{
    public const string SectionName = "OpenIdConnect";

    public string Authority { get; set; } = string.Empty;
}
