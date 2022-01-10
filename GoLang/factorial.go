package main

import "fmt"

func main(){
	fmt.Println("***********Factorial****************")
	num := 5

	fmt.Println(factorial(num))
}

//Function for get factorial
func factorial(num int) int {
	var ans int = 1
	for i := num; i > 1; i-- {
		ans = ans * i
	}
	return ans
}
