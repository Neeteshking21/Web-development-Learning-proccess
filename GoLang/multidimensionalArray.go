package main

import "fmt"

func main(){
	fmt.Println("**************Declare In Single Line*****************")

	myarr:= [3][3]string{{"Neetesh", "18"}, {"NeelKamal", "18"}}

	for i:=0; i<len(myarr); i++{
		for j:=0; j<len(myarr[i]); j++{
			fmt.Println(myarr[i][j])
		}
	}
}