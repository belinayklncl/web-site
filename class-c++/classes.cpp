#include <iostream>
#include <string>
using namespace std;

class Employee {
protected:
string name;
public:
Employee(string n){
    name = n;
}
virtual double getSalary(){
    return 0;
}
};
class Manager : public Employee {
    private:
    double salary;
    public:
    Manager(string n,double s) : Employee (n){
        salary = s;
    }
    double getSalary () override {
        return salary;
    }
};
int main(){
    Manager m("Belus",600);
    Employee* e;
    e = &m;
    cout<<e->getSalary();
    return 0;
}