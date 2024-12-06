module Main where

somaVetor :: [Int] -> Int
somaVetor [] = 0
somaVetor (x:xs) = x + somaVetor xs

main :: IO ()
main = do
    let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    putStrLn ("A soma dos elementos do vetor e: " ++ show (somaVetor vetor))

