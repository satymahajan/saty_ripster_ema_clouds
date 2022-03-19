# Saty_Ripster_EMA_Clouds
# Upgraded version of Ripster's famous EMA clouds.
# v2 By Saty Mahajan (2022)
# Author is not responsible for your trading using this script.
# Data provided in this script is not financial advice.
#
# Features:
# The 4 EMAs Ripster commonly uses are included by default. 
# EMA values are configurable.
# Colors are configurable.
# 2 Additional EMAs
# Option to enable/disable EMAs

def price = close;

input FluidTrendOn = yes;
input FluidTrendEMALow = 5;
input FluidTrendEMAHigh = 12;
DefineGlobalColor("Fluid Trend Bullish", Color.GREEN);
DefineGlobalColor("Fluid Trend Bearish", Color.RED);
def FluidTrendEMALowValue = ExpAverage(price, FluidTrendEMALow);
def FluidTrendEMAHighValue = ExpAverage(price, FluidTrendEMAHigh);
AddCloud(if FluidTrendOn then FluidTrendEMALowValue else double.nan, FluidTrendEMAHighValue, GlobalColor("Fluid Trend Bullish"), GlobalColor("Fluid Trend Bearish"));

input PullbackOn = yes;
input PullbackEMALow = 8;
input PullbackEMAHigh = 9;
DefineGlobalColor("Pullback Bullish", Color.LIME);
DefineGlobalColor("Pullback Bearish", Color.PINK);
def PullbackEMALowValue = ExpAverage(price, PullbackEMALow);
def PullbackEMAHighValue = ExpAverage(price, PullbackEMAHigh);
AddCloud(if PullbackOn then PullbackEMALowValue else double.nan, PullbackEMAHighValue, GlobalColor("Pullback Bullish"), GlobalColor("Pullback Bearish"));

input PivotOn = yes;
input PivotEMALow = 20;
input PivotEMAHigh = 21;
DefineGlobalColor("Pivot Bullish", Color.WHITE);
DefineGlobalColor("Pivot Bearish", Color.WHITE);
def PivotEMALowValue = ExpAverage(price, PivotEMALow);
def PivotEMAHighValue = ExpAverage(price, PivotEMAHigh);
AddCloud(if PivotOn then PivotEMALowValue else double.nan, PivotEMAHighValue, GlobalColor("Pivot Bullish"), GlobalColor("Pivot Bearish"));

input TrendOn = yes;
input TrendEMALow = 34;
input TrendEMAHigh = 50;
DefineGlobalColor("Trend Bullish", Color.CYAN);
DefineGlobalColor("Trend Bearish", Color.LIGHT_ORANGE);
def TrendEMALowValue = ExpAverage(price, TrendEMALow);
def TrendEMAHighValue = ExpAverage(price, TrendEMAHigh);
AddCloud(if TrendOn then TrendEMALowValue else double.nan, TrendEMAHighValue, GlobalColor("Trend Bullish"), GlobalColor("Trend Bearish"));

input MidtermTrendOn = no;
input MidtermTrendLow = 72;
input MidtermTrendHigh = 89;
DefineGlobalColor("Mid-term Trend Bullish", Color.GRAY);
DefineGlobalColor("Mid-term Trend Bearish", Color.GRAY);
def MidtermTrendEMALowValue = ExpAverage(price,MidtermTrendLow);
def MidtermTrendEMAHighValue = ExpAverage(price,MidtermTrendHigh);
AddCloud(if MidtermTrendOn then MidtermTrendEMALowValue else double.nan, MidtermTrendEMAHighValue, GlobalColor("Mid-term Trend Bullish"), GlobalColor("Mid-term Trend Bullish"));

input LongtermTrendOn = yes;
input LongtermTrendEMALow = 180;
input LongtermTrendEMAHigh = 200;
DefineGlobalColor("Long-term Trend Bullish", Color.GRAY);
DefineGlobalColor("Long-term Trend Bearish", Color.GRAY);
def LongtermTrendEMALowValue = ExpAverage(price, LongtermTrendEMALow);
def LongtermTrendEMAHighValue = ExpAverage(price, LongtermTrendEMAHigh);
AddCloud(if LongtermTrendOn then LongtermTrendEMALowValue else double.nan, LongtermTrendEMAHighValue, GlobalColor("Long-term Trend Bullish"), GlobalColor("Long-term Trend Bullish"));
