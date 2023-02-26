Set-Location -Path '.\Database';

$EntityDir = "Entities";
$ContextName = "ApplicationDbContext";

$DbHost = "localhost";
$DbPort = "5432";
$DbName = "app";
$UserName = "postgres";
$Password = "postgres";

$ConnectionString = "Host=$($DbHost); Port=$($DbPort); Database=$($DbName); Username=$($UserName); Password=$($Password);";

# Remove folder
Remove-Item -Recurse $EntityDir;

dotnet-ef dbcontext scaffold $ConnectionString Npgsql.EntityFrameworkCore.PostgreSQL --context $ContextName --data-annotations --force --verbose --output-dir $EntityDir --no-onconfiguring --schema public;

# Remove default constructor
# See: https://github.com/dotnet/efcore/issues/12604
(Get-Content "./$($EntityDir)/$($ContextName).cs" -Raw) -replace "(?ms)$($ContextName)\(\).*?public ", "" | Set-Content "./$($EntityDir)/$($ContextName).cs"

Set-Location -Path '..\';
