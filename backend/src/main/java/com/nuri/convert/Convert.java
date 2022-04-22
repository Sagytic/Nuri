package com.nuri.convert;

import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Convert {
    static ArrayList<String> convertCode;
    static public ArrayList<String> lexical(String userCode){
        StringTokenizer tokens = new StringTokenizer(userCode, " (){};+-*/\n", true);
        convertCode = new ArrayList<>();

        while(tokens.hasMoreTokens()) {
            String token = tokens.nextToken();
            switch (token) {
                case "정수":
                    convertCode.add("int");
                    break;
                case "소수":
                    convertCode.add("double");
                    break;
                case "문자":
                    convertCode.add("String");
                    break;
                case "정수들":
                    convertCode.add("int[]");
                    break;
                case "문자들":
                    convertCode.add("String[]");
                    break;
                case "소수들":
                    convertCode.add("double[]");
                    break;
                case "참거짓":
                    convertCode.add("boolean");
                    break;
                case "참거짓들":
                    convertCode.add("boolean[]");
                    break;
                case "쌓기":
                    convertCode.add("Stack");
                    break;
                case "줄세우기":
                    convertCode.add("Queue");
                    break;
                case "묶음":
                    convertCode.add("List");
                    break;
                case "구간반복":
                    convertCode.add("for");
                    convertFor(tokens);
                    break;
                case "조건반복":
                    convertCode.add("while");
                    break;
                case "만약":
                    convertCode.add("if");
                    break;
                case "아니면":
                    convertCode.add("else");
                    break;
                case "무작위":
                    convertCode.add("Math.random");
                    break;
                case "최대":
                    convertCode.add("Math.max");
                    break;
                case "최소":
                    convertCode.add("Math.min");
                    break;
                case "출력":
                    convertCode.add("System.out.println");
                    break;
                case "상황":
                    convertCode.add("switch");
                    break;
                case "선택":
                    convertCode.add("case");
                case "멈춤":
                    convertCode.add("break");
                    break;
                case "기본":
                    convertCode.add("default");
                    break;
                case "입력":
                    convertCode.add("scanner.nextInt()");
                    break;
                default:
                    convertCode.add(token);
                    break;
            }
        }

        return convertCode;
    }

    private static void convertFor(StringTokenizer tokens) {
        while(tokens.hasMoreTokens()){
            String token = tokens.nextToken();

            if(token.equals(" ") || token.equals("(")){
                convertCode.add(token);
            }else if(token.equals(")")){
                convertCode.add(token);
                break;
            }else{
                String[] val = token.split("=|,");
                System.out.println(val[0]);
                System.out.println(val[1]);
                System.out.println(val[2]);
                convertCode.add("int");
                convertCode.add(" ");
                convertCode.add(val[0]);
                convertCode.add("=");
                convertCode.add(val[1]);
                convertCode.add(";");
                convertCode.add(" ");
                convertCode.add(val[0]);
                convertCode.add("<");
                convertCode.add(val[2]);
                convertCode.add(";");
                convertCode.add(" ");
                convertCode.add(val[0]);
                convertCode.add("++");
            }
        }
    }
}
