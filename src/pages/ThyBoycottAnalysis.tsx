
                      <Bar
                        dataKey="commentCount"
                        name="Yorum/Dakika"
                        fill={(data: any) => {
                          return data.commentCount > 20 ? "#ef4444" : "#3b82f6";
                        }}
                        radius={[4, 4, 0, 0]}
                      >
                      </Bar>
