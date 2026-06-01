# Chay script nay SAU KHI da dang nhap GitHub: gh auth login
$env:PATH = "C:\Program Files\GitHub CLI;C:\Program Files\Git\cmd;C:\Program Files\Git\bin;C:\Program Files\nodejs;" + $env:PATH
Set-Location $PSScriptRoot

gh auth status
if ($LASTEXITCODE -ne 0) {
  Write-Host "Chua dang nhap GitHub. Chay: gh auth login" -ForegroundColor Red
  exit 1
}

gh repo create douviiii.github.io --public --source=. --remote=origin --push
if ($LASTEXITCODE -ne 0) {
  Write-Host "Repo co the da ton tai, thu push truc tiep..." -ForegroundColor Yellow
  git remote remove origin 2>$null
  git remote add origin https://github.com/douviiii/douviiii.github.io.git
  git push -u origin main
}

Write-Host ""
Write-Host "Buoc cuoi: GitHub repo -> Settings -> Pages -> Source: GitHub Actions" -ForegroundColor Cyan
Write-Host "Site se live tai: https://douviiii.github.io" -ForegroundColor Green
