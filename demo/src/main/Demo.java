package main;

import java.util.*;



  interface I1{
   int m1();
  }
  class Demo{
   public static void main(String[] args) {
    System.out.println(new I1(){
     public int m1() {
      return 2;
     }
    });
   }
  }



