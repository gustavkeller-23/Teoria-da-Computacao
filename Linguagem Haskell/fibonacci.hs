module Main where

fibonacci :: Int -> Int
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci n = fibonacci (n - 1) + fibonacci (n - 2)

main :: IO ()
main = do
   putStrLn "Digite um numero para calcular o Fibonacci:"
   n <- readLn
   putStrLn ("O Fibonacci de " ++ show n ++ " e: " ++ show (fibonacci n))

