rem 実行して3秒後にタイピングするよ

timeout 3
powershell -Command "&{add-type -AssemblyName System.Windows.Forms;[System.Windows.Forms.SendKeys]::SendWait('Hackers Bar');}"