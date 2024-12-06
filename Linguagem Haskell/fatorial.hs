module Main where

fatorial :: Int -> Int
fatorial 1 = 1
fatorial n = n * fatorial (n-1)

main :: IO ()
main = do
	let resultado = fatorial 5
	putStrLn ("Fatorial: " ++ show resultado)
