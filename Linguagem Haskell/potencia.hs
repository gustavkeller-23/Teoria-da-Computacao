module Main where

potencia :: Int -> Int -> Int
potencia a 0 = 1
potencia a b = a * (potencia a (b-1))

main :: IO ()
main = do
    putStrLn("Insira o numero base: ");
    base <- readLn 
    putStrLn("Insira o valor do expoente: ");
    expoente <- readLn;
    putStrLn("O valor " ++ show base ++ " elevado a " ++ show expoente ++ " resulta em: " ++ show (potencia base expoente));

