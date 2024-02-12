package main

import (
	"math"
)

type MinStack struct {
	stack    []int
	minStack []int
}

func Constructor() MinStack {
	return MinStack{minStack: []int{math.MaxInt32}}
}

func (this *MinStack) Push(val int) {
	this.stack = append(this.stack, val)

	lastMin := this.minStack[len(this.minStack)-1]
	if val <= lastMin {
		this.minStack = append(this.minStack, val)
	}
}

func (this *MinStack) Pop() {
	top := this.stack[len(this.stack)-1]
	this.stack = this.stack[:len(this.stack)-1]

	if top == this.minStack[len(this.minStack)-1] {
		this.minStack = this.minStack[:len(this.minStack)-1]
	}
}

func (this *MinStack) Top() int {
	return this.stack[len(this.stack)-1]
}

func (this *MinStack) GetMin() int {
	return this.minStack[len(this.minStack)-1]
}

/**
* Your MinStack object will be instantiated and called as such:
* obj := Constructor();
* obj.Push(val);
* obj.Pop();
* param_3 := obj.Top();
* param_4 := obj.GetMin();
 */
