import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import ChartDialog from '../components/swap/ChartDialog';
import Widget from '../components/swap/Widget';
import '../App.css'; // Ensure the CSS is imported

const ChartPage: React.FC = () => {
  const [isChartDialogVisible, setIsChartDialogVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleChartIconClick = () => {
    if (isChartDialogVisible) {
      setAnimationClass('chart-dialog-exit');
      setTimeout(() => {
        setIsChartDialogVisible(false);
        setAnimationClass(''); 
      }, 300);
    } else {
      setIsChartDialogVisible(true);
      setAnimationClass('chart-dialog-enter'); 
    }
  };

  return (
    <div className="w-full p-8 h-full ">
      <Navbar />
      <div className="p-4 flex flex-col justify-center items-center pt-16">
        <div className="flex justify-center items-start gap-x-2">
          {isChartDialogVisible && <div className={animationClass}> <ChartDialog/> </div>}
          <Widget onChartIconClick={handleChartIconClick} />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
