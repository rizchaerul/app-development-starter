# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine AS build-env
WORKDIR /app

# Copy everything and build
COPY . ./

RUN dotnet restore WebService
RUN dotnet publish WebService --configuration Release --output out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine
WORKDIR /app
COPY --from=build-env /app/out .

ENV ASPNETCORE_HTTPS_PORT 443

ENTRYPOINT [ "dotnet", "WebService.dll" ]
