const { exec } = require("child_process");

const PORT = process.env.PORT || 3000;

const killPort = (port) => {
  const isWin = process.platform === "win32";
  const cmd = isWin
    ? `for /f "tokens=5" %a in ('netstat -aon ^| find ":${port}" ^| find "LISTENING"') do taskkill /F /PID %a`
    : `fuser -k ${port}/tcp`;

  console.log(`Tentando liberar porta ${port}...`);
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error(`Erro ao liberar porta ${port}:\n`, stderr);
    } else {
      console.log(`✅ Porta ${port} liberada com sucesso.`);
      console.log(stdout);
    }
  });
};

killPort(PORT);
