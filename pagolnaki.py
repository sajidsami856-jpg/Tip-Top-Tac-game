class Account:
    def __init__(self,bal,acc_no):
        self.balance = bal
        self.account_no =acc_no
    #Debit gadget
    def Debit(self,ammount):
        self.balance -= ammount
        print(ammount ,"was debited from your account", "now taka ase" ,self.get_balance())
    #Credit gadget
    def Credit(self,ammount):
        self.balance += ammount
        print(ammount, "was credited from your account", self.get_balance())
    def get_balance(self):
        return self.balance




acc = Account(100000,353)
#print(acc.acc_no)
#print(acc.bal)

acc.Debit(200)
acc.Credit(100)

       