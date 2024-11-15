const logServerStart = async (port) => {
    try {
      const chalk = (await import('chalk')).default; 
      console.log(chalk.bgMagenta.white.bold('🎉 Event service is up and running! 🎉'));
      console.log(chalk.green(`Server running at ${chalk.bold(`http://localhost:${port}`)} 🚀`));
    } catch (error) {
      console.error('Error importing chalk:', error);
    }
  };
  
  module.exports = { logServerStart };
  