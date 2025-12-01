import React, { useEffect, useState } from 'react';
import DBlayout from '../../components/layouts/DBlayout';
import { useUserAuth } from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import InfoCard from '../../components/cards/InfoCard';
import { addThousandsSeparator } from '../../utils/helper';
import RecentTransactions from '../../components/Dashboard/RecentTransactions';
import FinanceOverview from '../../components/Dashboard/FinanceOverview';
import ExpenseTransactions from '../../components/Dashboard/ExpenseTransactions';
import Last30DaysExpenses from '../../components/Dashboard/Last30DaysExpenses';
import RecentIncomeWithChart from '../../components/Dashboard/RecentIncomeWithChart';
import RecentIncome from '../../components/Dashboard/RecentIncome';

import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';
import { IoMdCard } from "react-icons/io";

const Home = () => {
  useUserAuth();
  
  const navigate = useNavigate();
  
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchDashboardData = async () => {
    if(loading) return;
    
    setLoading(true);
    
    try {
      const response = await axiosInstance.get(
        `${API_PATHS.DASHBOARD.GET_DATA}`
      );
      
      if (response.data) {
        setDashboardData(response.data);
        // Log the entire response data
        console.log("Dashboard API Response:", response.data);
        // Log specifically the RecentTransactions
        console.log("Recent Transactions data:", response.data.RecentTransactions);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchDashboardData();
    
    return () => {
      // Cleanup function
    }
  }, []);
  
  // Add effect to log transactions data whenever dashboardData changes
  useEffect(() => {
    if (dashboardData) {
      console.log("RecentTransactions from dashboardData:", dashboardData.RecentTransactions);
    }
  }, [dashboardData]);
  
  return (
    <DBlayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<IoMdCard />}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color="bg-purple-500"
          />
          
          <InfoCard
            icon={<LuWalletMinimal />}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color="bg-orange-500"
          />
          <InfoCard
            icon={<LuHandCoins />}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpenses || 0)}
            color="bg-red-500"
          />
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <RecentTransactions
            transactions={dashboardData?.recentTransactions || []}
            onSeeMore={() => navigate("/expense")}
          />

          <FinanceOverview
          totalBalance={dashboardData?.totalBalance || 0}
          totalIncome={dashboardData?.totalIncome || 0}
          totalExpenses={dashboardData?.totalExpenses ||0}
          />

          <ExpenseTransactions
          transactions={dashboardData?.recentTransactions?.filter(tx => tx.type === 'expense') || []}
          onSeeMore={() => navigate("/expense")}
          />

          <Last30DaysExpenses
          data={dashboardData?.recentTransactions?.filter(tx => tx.type === 'expense') || []}
          onSeeMore={() => navigate("/expense")}
          />

           <RecentIncomeWithChart 
           data={dashboardData?.recentTransactions?.filter(tx => tx.type === 'income') || []}
           totalIncome={dashboardData?.totalIncome || 0}
           />

           <RecentIncome
           transactions={dashboardData?.recentTransactions?.filter(tx => tx.type === 'income') || []}
           onSeeMore={() => navigate("/income")}
           />

        </div>
      </div>
    </DBlayout>
  );
};

export default Home;