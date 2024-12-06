module Main where

mdc :: Int -> Int -> Int
mdc a 0 = a
mdc a b = mdc b (mod a b)

main :: IO ()
main = do
    putStrLn ("Insira o primeiro numero: ")
    num1 <- readLn 
    putStrLn ("Insira o segundo numero: ")
    num2 <- readLn
    putStrLn("O MDC de " ++ show num1 ++ " e " ++ show num2 ++ " e: " ++ show (mdc num1 num2))