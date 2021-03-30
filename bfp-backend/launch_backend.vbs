Set WshShell = CreateObject("WScript.Shell") 
WshShell.Run chr(34) & "C:\firecode_system\bfp-backend\runbackend.bat" & Chr(34), 0
Set WshShell = Nothing