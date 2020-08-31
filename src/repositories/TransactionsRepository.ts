import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions.reduce((acc, curr) => {
      return curr.type === 'income' ? acc + curr.value : acc;
    }, 0);

    const outcome = this.transactions.reduce((acc, curr) => {
      return curr.type === 'outcome' ? acc + curr.value : acc;
    }, 0);

    const balance: Balance = {
      income,
      outcome,
      total: income - outcome,
    };

    return balance;
  }

  public create(): Transaction {
    // TODO
  }
}

export default TransactionsRepository;
