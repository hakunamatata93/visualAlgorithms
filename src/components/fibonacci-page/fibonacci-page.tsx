import React from "react";
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import styles from "./fibonacci-page.module.css";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";

export const FibonacciPage: React.FC = () => {
  return (
    <SolutionLayout title="Последовательность Фибоначчи">
          <main className={styles.main}>
        <Input 

          isLimitText
          max={19}
          type=''


        />
        <Button 
          text='Рассчитать'/>
      </main>
    </SolutionLayout>
  );
};
