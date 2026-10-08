#include<iostream>
#include<vector>
#include<algorithm>
#include<climits>
using namespace std;
// int samiName(const vector<int>& nums ,int target){
//     for(int i:nums){
//         if(i==target){
//             return target ;
//         }
//     }return -1;
// }
// int main (){
//     vector<int>nafi={ 1,5,7,9,4,3};
//     int target = 9;
//     cout<<samiName(nafi ,target);
//     return 0;
// }
// int main(){
    
//     for (int i=0 ; i<9 ;i++){
//         int currentSum=0;
//         for (int j=i ; j<9 ;j++){
//             currentSum+=sami[j];
//             maxSum=max(maxSum ,currentSum);
//         }
//     }cout << maxSum;
//     return 0;
// }
// int main(){
//     int sami[16]={1,5,-3,-1,2,7,-4,8,-3,-8,7,-4,6,1,-2,7};
//     int maxSum =INT_MIN;
//     int currentSum =0;
//     for (int i=0;i<16;i++){
//         currentSum+=sami[i];
//         maxSum=max(maxSum,currentSum);
//         if(currentSum<0){
//             currentSum=0;
//         }
//     }cout<< maxSum;
// }
// #include <iostream>
// #include <climits>    // INT_MIN এর জন্য
// #include <algorithm>  // max() এর জন্য
// using namespace std;
vector<int>samiName(){
    vector<int>sami = {1, 2,3,4,7,9,12,16,18,23,36,56};
    int target=60;
    int i=0;
    vector<int> answer;
    int n=sami.size();
    int j=n-1;
    while(j>i){
        if(sami[i]+sami[j]>target){
            j--;
        }else if (sami[i]+sami[j]<target){
            i++;
        }else if(sami[i]+sami[j]==target){
            answer.push_back(i);
            answer.push_back(j);
            return answer;
        }
    }
}

int main() {
    vector<int>b=samiName();
    cout << b[0]<<","<<b[1];
    
    return 0;
    
}
