export const logServerStart = async () => {
    try {
      const chalk = (await import('chalk')).default; 
      console.log(chalk.bgMagenta.white.bold('🎉 Event service is up and running! 🎉'));      
    } catch (error) {
      console.error('Error importing chalk:', error);
    }
  };